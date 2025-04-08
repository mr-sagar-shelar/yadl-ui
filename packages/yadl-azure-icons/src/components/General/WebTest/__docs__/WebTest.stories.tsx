import type { Meta, StoryObj } from "@storybook/react";
import WebTest from "../WebTest";

const meta: Meta<typeof WebTest> = { title: "Azure/General/WebTest", component: WebTest };

export default meta;
type Story = StoryObj<typeof WebTest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
