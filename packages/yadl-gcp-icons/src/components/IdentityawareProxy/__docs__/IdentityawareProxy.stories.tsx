import type { Meta, StoryObj } from "@storybook/react";
import IdentityawareProxy from "../IdentityawareProxy";

const meta: Meta<typeof IdentityawareProxy> = { title: "GCP/IdentityawareProxy", component: IdentityawareProxy };

export default meta;
type Story = StoryObj<typeof IdentityawareProxy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
