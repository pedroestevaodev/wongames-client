import "styled-components";
import type { ThemeType } from "../public/styles/theme";

declare module "styled-components" {
	// Interface merge is required by styled-components; ThemeType supplies the shape.
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export interface DefaultTheme extends ThemeType {}
}
