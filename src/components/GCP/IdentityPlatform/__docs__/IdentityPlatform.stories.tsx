import type { Meta, StoryObj } from "@storybook/react";
import IdentityPlatform from "../IdentityPlatform";

const meta: Meta<typeof IdentityPlatform> = { title: "GCP/IdentityPlatform", component: IdentityPlatform };

export default meta;
type Story = StoryObj<typeof IdentityPlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
