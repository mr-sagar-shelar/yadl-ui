import type { Meta, StoryObj } from "@storybook/react";
import Shape1 from "../Shape21";

const meta: Meta<typeof Shape1> = { title: "Shape/Shape1", component: Shape1 };

export default meta;
type Story = StoryObj<typeof Shape1>;

export const Primary: Story = {
  args: {
    height: 200,
    width: 200,
  },
};
