import type { Meta, StoryObj } from "@storybook/react";
import ExternalIdentities from "../ExternalIdentities";

const meta: Meta<typeof ExternalIdentities> = { title: "Azure/Identity/ExternalIdentities", component: ExternalIdentities };

export default meta;
type Story = StoryObj<typeof ExternalIdentities>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
