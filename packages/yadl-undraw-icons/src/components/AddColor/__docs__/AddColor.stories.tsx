import type { Meta, StoryObj } from "@storybook/react";
import AddColor from "../AddColor";

const meta: Meta<typeof AddColor> = { title: "unDraw/AddColor", component: AddColor };

export default meta;
type Story = StoryObj<typeof AddColor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
