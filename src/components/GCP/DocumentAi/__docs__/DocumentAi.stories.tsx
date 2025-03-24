import type { Meta, StoryObj } from "@storybook/react";
import DocumentAi from "../DocumentAi";

const meta: Meta<typeof DocumentAi> = { title: "GCP/DocumentAi", component: DocumentAi };

export default meta;
type Story = StoryObj<typeof DocumentAi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
