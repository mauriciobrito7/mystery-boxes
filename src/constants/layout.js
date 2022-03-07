import { Slug } from "./";

export const LayoutVariant = {
	default: "default",
	full: "full",
};

export const layoutMode = {
	[Slug.Home]: LayoutVariant.full,
	[Slug.BoxDetail]: LayoutVariant.default,
	[Slug.Gifts]: LayoutVariant.full,
};
