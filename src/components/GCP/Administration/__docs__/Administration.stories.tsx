import type { Meta, StoryObj } from "@storybook/react";
import Administration from "../Administration";

const meta: Meta<typeof Administration> = { title: "GCP/Administration", component: Administration };

export default meta;
type Story = StoryObj<typeof Administration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
