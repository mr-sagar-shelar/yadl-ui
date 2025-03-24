import type { Meta, StoryObj } from "@storybook/react";
import ReleaseNotes from "../ReleaseNotes";

const meta: Meta<typeof ReleaseNotes> = { title: "GCP/ReleaseNotes", component: ReleaseNotes };

export default meta;
type Story = StoryObj<typeof ReleaseNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
