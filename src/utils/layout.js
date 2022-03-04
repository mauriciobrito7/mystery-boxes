import { Slug } from "../constants";
import { LayoutVariant } from "../components/Layout";

export const layoutMode = {
	[Slug.Home]: LayoutVariant.default,
	[Slug.BoxDetail]: LayoutVariant.default,
	[Slug.Gifts]: LayoutVariant.full,
};
