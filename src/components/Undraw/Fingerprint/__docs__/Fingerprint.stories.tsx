import type { Meta, StoryObj } from "@storybook/react";
import Fingerprint from "../Fingerprint";

const meta: Meta<typeof Fingerprint> = { title: "unDraw/Fingerprint", component: Fingerprint };

export default meta;
type Story = StoryObj<typeof Fingerprint>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
