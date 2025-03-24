import type { Meta, StoryObj } from "@storybook/react";
import MediaTranslationApi from "../MediaTranslationApi";

const meta: Meta<typeof MediaTranslationApi> = { title: "GCP/MediaTranslationApi", component: MediaTranslationApi };

export default meta;
type Story = StoryObj<typeof MediaTranslationApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
