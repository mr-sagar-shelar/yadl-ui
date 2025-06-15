import type { Meta, StoryObj } from "@storybook/react";
import Shape1 from "../Shape1";

const meta: Meta<typeof Shape1> = { title: "Basic/Shape1", component: Shape1 };

export default meta;
type Story = StoryObj<typeof Shape1>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
