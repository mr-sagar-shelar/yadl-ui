import type { Meta, StoryObj } from "@storybook/react";
import FSxforOpenZFS from "../FSxforOpenZFS";

const meta: Meta<typeof FSxforOpenZFS> = { title: "AWS/Storage/FSxforOpenZFS", component: FSxforOpenZFS };

export default meta;
type Story = StoryObj<typeof FSxforOpenZFS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
