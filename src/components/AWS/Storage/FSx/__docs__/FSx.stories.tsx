import type { Meta, StoryObj } from "@storybook/react";
import FSx from "../FSx";

const meta: Meta<typeof FSx> = { title: "AWS/Storage/FSx", component: FSx };

export default meta;
type Story = StoryObj<typeof FSx>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
