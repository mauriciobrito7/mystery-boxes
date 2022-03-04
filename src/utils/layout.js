import { Slug } from "../constants";
import { LayoutVariant } from "../constants/";

export const layoutMode = {
	[Slug.Home]: LayoutVariant.default,
	[Slug.BoxDetail]: LayoutVariant.default,
	[Slug.Gifts]: LayoutVariant.full,
};
