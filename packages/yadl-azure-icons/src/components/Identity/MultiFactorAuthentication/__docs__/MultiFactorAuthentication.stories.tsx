import type { Meta, StoryObj } from "@storybook/react";
import MultiFactorAuthentication from "../MultiFactorAuthentication";

const meta: Meta<typeof MultiFactorAuthentication> = { title: "Azure/Identity/MultiFactorAuthentication", component: MultiFactorAuthentication };

export default meta;
type Story = StoryObj<typeof MultiFactorAuthentication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
