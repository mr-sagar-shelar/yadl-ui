import type { Meta, StoryObj } from "@storybook/react";
import SharingArticles from "../SharingArticles";

const meta: Meta<typeof SharingArticles> = { title: "unDraw/SharingArticles", component: SharingArticles };

export default meta;
type Story = StoryObj<typeof SharingArticles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
