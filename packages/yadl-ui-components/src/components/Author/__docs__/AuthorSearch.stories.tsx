import type { Meta, StoryObj } from "@storybook/react";
import SearchAuthor from "../SearchAuthor";

const meta: Meta<typeof SearchAuthor> = { title: "Author/Search", component: SearchAuthor };

export default meta;
type Story = StoryObj<typeof SearchAuthor>;

export const First: Story = {
};