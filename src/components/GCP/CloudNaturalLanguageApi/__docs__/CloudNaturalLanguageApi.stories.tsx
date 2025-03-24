import type { Meta, StoryObj } from "@storybook/react";
import CloudNaturalLanguageApi from "../CloudNaturalLanguageApi";

const meta: Meta<typeof CloudNaturalLanguageApi> = { title: "GCP/CloudNaturalLanguageApi", component: CloudNaturalLanguageApi };

export default meta;
type Story = StoryObj<typeof CloudNaturalLanguageApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
