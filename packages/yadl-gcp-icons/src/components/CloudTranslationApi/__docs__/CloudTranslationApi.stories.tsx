import type { Meta, StoryObj } from "@storybook/react";
import CloudTranslationApi from "../CloudTranslationApi";

const meta: Meta<typeof CloudTranslationApi> = { title: "GCP/CloudTranslationApi", component: CloudTranslationApi };

export default meta;
type Story = StoryObj<typeof CloudTranslationApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
