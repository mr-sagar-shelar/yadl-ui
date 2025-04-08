import type { Meta, StoryObj } from "@storybook/react";
import CurrentLocation from "../CurrentLocation";

const meta: Meta<typeof CurrentLocation> = { title: "unDraw/CurrentLocation", component: CurrentLocation };

export default meta;
type Story = StoryObj<typeof CurrentLocation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
