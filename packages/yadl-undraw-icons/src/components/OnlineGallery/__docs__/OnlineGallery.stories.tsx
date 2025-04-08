import type { Meta, StoryObj } from "@storybook/react";
import OnlineGallery from "../OnlineGallery";

const meta: Meta<typeof OnlineGallery> = { title: "unDraw/OnlineGallery", component: OnlineGallery };

export default meta;
type Story = StoryObj<typeof OnlineGallery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
