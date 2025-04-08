import type { Meta, StoryObj } from "@storybook/react";
import GoodDoggy from "../GoodDoggy";

const meta: Meta<typeof GoodDoggy> = { title: "unDraw/GoodDoggy", component: GoodDoggy };

export default meta;
type Story = StoryObj<typeof GoodDoggy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
