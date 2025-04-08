import type { Meta, StoryObj } from "@storybook/react";
import FSxforLustre from "../FSxforLustre";

const meta: Meta<typeof FSxforLustre> = { title: "AWS/Storage/FSxforLustre", component: FSxforLustre };

export default meta;
type Story = StoryObj<typeof FSxforLustre>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
