import type { Meta, StoryObj } from "@storybook/react";
import WebAppDatabase from "../WebAppDatabase";

const meta: Meta<typeof WebAppDatabase> = { title: "Azure/Other/WebAppDatabase", component: WebAppDatabase };

export default meta;
type Story = StoryObj<typeof WebAppDatabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
