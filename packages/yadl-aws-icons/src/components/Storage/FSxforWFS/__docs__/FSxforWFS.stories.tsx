import type { Meta, StoryObj } from "@storybook/react";
import FSxforWFS from "../FSxforWFS";

const meta: Meta<typeof FSxforWFS> = { title: "AWS/Storage/FSxforWFS", component: FSxforWFS };

export default meta;
type Story = StoryObj<typeof FSxforWFS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
