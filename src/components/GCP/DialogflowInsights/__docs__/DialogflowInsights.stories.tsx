import type { Meta, StoryObj } from "@storybook/react";
import DialogflowInsights from "../DialogflowInsights";

const meta: Meta<typeof DialogflowInsights> = { title: "GCP/DialogflowInsights", component: DialogflowInsights };

export default meta;
type Story = StoryObj<typeof DialogflowInsights>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
