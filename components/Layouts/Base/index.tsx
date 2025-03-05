import React from 'react';
import * as S from './styles';
import Container from '@/components/Container';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { auth } from "@/services/auth";
import { ChildrenProps } from "@/@types/nextjs";

const Base = async ({ children }: ChildrenProps) => {
	const session = await auth();

	return (
		<S.BaseContainer>
			<Container>
				<Menu username={session?.user?.name} />
			</Container>

			<S.Content>{children}</S.Content>

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</S.BaseContainer>
	);
};

export default Base;
