import type { Meta, StoryObj } from "@storybook/react";
import KeyAccessJustifications from "../KeyAccessJustifications";

const meta: Meta<typeof KeyAccessJustifications> = { title: "GCP/KeyAccessJustifications", component: KeyAccessJustifications };

export default meta;
type Story = StoryObj<typeof KeyAccessJustifications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
