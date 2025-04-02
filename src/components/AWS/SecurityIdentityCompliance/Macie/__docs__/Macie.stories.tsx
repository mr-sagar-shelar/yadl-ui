import type { Meta, StoryObj } from "@storybook/react";
import Macie from "../Macie";

const meta: Meta<typeof Macie> = { title: "AWS/SecurityIdentityCompliance/Macie", component: Macie };

export default meta;
type Story = StoryObj<typeof Macie>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
