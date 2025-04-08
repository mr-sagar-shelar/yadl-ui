import type { Meta, StoryObj } from "@storybook/react";
import AppEngine from "../AppEngine";

const meta: Meta<typeof AppEngine> = { title: "GCP/AppEngine", component: AppEngine };

export default meta;
type Story = StoryObj<typeof AppEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
