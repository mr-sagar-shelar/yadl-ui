import type { Meta, StoryObj } from "@storybook/react";
import FashionBlogging from "../FashionBlogging";

const meta: Meta<typeof FashionBlogging> = { title: "unDraw/FashionBlogging", component: FashionBlogging };

export default meta;
type Story = StoryObj<typeof FashionBlogging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
