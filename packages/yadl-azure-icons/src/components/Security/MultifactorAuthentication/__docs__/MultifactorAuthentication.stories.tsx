import type { Meta, StoryObj } from "@storybook/react";
import MultifactorAuthentication from "../MultifactorAuthentication";

const meta: Meta<typeof MultifactorAuthentication> = { title: "Azure/Security/MultifactorAuthentication", component: MultifactorAuthentication };

export default meta;
type Story = StoryObj<typeof MultifactorAuthentication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
