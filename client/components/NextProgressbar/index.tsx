'use client';

import { Suspense, useEffect, useState } from 'react';

type ProgressSnapshot = {
	visible: boolean;
	width: number;
};

let trickleTimer: number | null = null;
let hideTimer: number | null = null;
let safetyTimer: number | null = null;
let urlWatchTimer: number | null = null;
let startedAt = 0;
let urlWhenStarted = '';
let destinationUrl: string | null = null;
let historyPatched = false;
const listeners = new Set<() => void>();
let snapshot: ProgressSnapshot = { visible: false, width: 0 };

const emit = (): void => {
	listeners.forEach((listener) => listener());
};

const clearAllTimers = (): void => {
	if (trickleTimer !== null) {
		window.clearInterval(trickleTimer);
		trickleTimer = null;
	}
	if (hideTimer !== null) {
		window.clearTimeout(hideTimer);
		hideTimer = null;
	}
	if (safetyTimer !== null) {
		window.clearTimeout(safetyTimer);
		safetyTimer = null;
	}
	if (urlWatchTimer !== null) {
		window.clearInterval(urlWatchTimer);
		urlWatchTimer = null;
	}
};

const getLocationKey = (): string =>
	`${window.location.pathname}${window.location.search}`;

const doneProgressInternal = (): void => {
	clearAllTimers();
	urlWhenStarted = '';
	destinationUrl = null;
	if (!snapshot.visible) {
		snapshot = { visible: false, width: 0 };
		emit();
		return;
	}

	snapshot = { visible: true, width: 100 };
	emit();
	hideTimer = window.setTimeout(() => {
		snapshot = { visible: false, width: 0 };
		emit();
	}, 220);
};

const shouldComplete = (): boolean => {
	const current = getLocationKey();

	// Normal case: App Router already moved away from the URL at start().
	if (current !== urlWhenStarted) {
		return true;
	}

	// Race: Next.js pushState ran before our capture listener, so start()
	// already sees the destination URL. Complete after a short settle delay.
	if (
		destinationUrl !== null &&
		current === destinationUrl &&
		Date.now() - startedAt >= 180
	) {
		return true;
	}

	return false;
};

const startProgressInternal = (nextUrl: string | null = null): void => {
	patchHistory();
	clearAllTimers();
	startedAt = Date.now();
	urlWhenStarted = getLocationKey();
	destinationUrl = nextUrl;
	snapshot = { visible: true, width: 12 };
	emit();

	trickleTimer = window.setInterval(() => {
		if (snapshot.width >= 90) return;
		snapshot = {
			visible: true,
			width: snapshot.width + 4 + Math.random() * 6,
		};
		emit();
	}, 280);

	urlWatchTimer = window.setInterval(() => {
		if (shouldComplete()) {
			doneProgressInternal();
		}
	}, 50);

	safetyTimer = window.setTimeout(() => {
		doneProgressInternal();
	}, 8000);
};

const patchHistory = (): void => {
	if (historyPatched || typeof window === 'undefined') return;
	historyPatched = true;

	const wrap =
		(original: typeof history.pushState) =>
		function (this: History, ...args: Parameters<typeof history.pushState>) {
			const result = original.apply(this, args);
			if (snapshot.visible) {
				window.queueMicrotask(() => {
					if (shouldComplete()) {
						doneProgressInternal();
					}
				});
			}
			return result;
		};

	history.pushState = wrap(history.pushState.bind(history));
	history.replaceState = wrap(history.replaceState.bind(history));
	window.addEventListener('popstate', () => {
		if (snapshot.visible && shouldComplete()) {
			doneProgressInternal();
		}
	});
};

/** Start the top progress bar (for programmatic navigations). */
export const startProgress = (): void => {
	if (typeof window === 'undefined') return;
	patchHistory();
	startProgressInternal(null);
};

/** Complete the top progress bar. */
export const doneProgress = (): void => {
	doneProgressInternal();
};

const isInternalNavigationAnchor = (anchor: HTMLAnchorElement): boolean => {
	if (anchor.target === '_blank' || anchor.hasAttribute('download')) {
		return false;
	}

	if (anchor.getAttribute('data-prevent-nprogress') === 'true') {
		return false;
	}

	const href = anchor.getAttribute('href');
	if (
		!href ||
		href.startsWith('#') ||
		href.startsWith('mailto:') ||
		href.startsWith('tel:') ||
		href.startsWith('javascript:')
	) {
		return false;
	}

	try {
		const url = new URL(href, window.location.href);
		if (url.origin !== window.location.origin) {
			return false;
		}

		return !(
			url.pathname === window.location.pathname &&
			url.search === window.location.search
		);
	} catch {
		return false;
	}
};

const ProgressBarInner = () => {
	const [state, setState] = useState(snapshot);

	useEffect(() => {
		patchHistory();
		const sync = () => setState({ ...snapshot });
		listeners.add(sync);
		sync();
		return () => {
			listeners.delete(sync);
		};
	}, []);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (event.defaultPrevented) return;
			if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
				return;
			}

			const target = event.target;
			if (!(target instanceof Element)) return;

			const anchor = target.closest('a');
			if (!(anchor instanceof HTMLAnchorElement)) return;
			if (!isInternalNavigationAnchor(anchor)) return;

			try {
				const url = new URL(anchor.href);
				startProgressInternal(`${url.pathname}${url.search}`);
			} catch {
				startProgressInternal(null);
			}
		};

		document.addEventListener('click', handleClick, true);
		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	}, []);

	if (!state.visible) {
		return null;
	}

	return (
		<div
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={Math.round(state.width)}
			aria-label="Page loading"
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 99999,
				height: '4px',
				width: `${state.width}%`,
				background: '#F231A5',
				boxShadow: '0 0 8px #F231A5',
				transition: 'width 200ms ease-out',
				pointerEvents: 'none',
			}}
		/>
	);
};

const NextProgressbar = () => {
	return (
		<Suspense fallback={null}>
			<ProgressBarInner />
		</Suspense>
	);
};

export default NextProgressbar;
