import type { Meta, StoryObj } from "@storybook/react";
import TestBase from "../TestBase";

const meta: Meta<typeof TestBase> = { title: "Azure/Other/TestBase", component: TestBase };

export default meta;
type Story = StoryObj<typeof TestBase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
