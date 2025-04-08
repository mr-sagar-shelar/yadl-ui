import type { Meta, StoryObj } from "@storybook/react";
import ManagedServiceForMicrosoftActiveDirectory from "../ManagedServiceForMicrosoftActiveDirectory";

const meta: Meta<typeof ManagedServiceForMicrosoftActiveDirectory> = { title: "GCP/ManagedServiceForMicrosoftActiveDirectory", component: ManagedServiceForMicrosoftActiveDirectory };

export default meta;
type Story = StoryObj<typeof ManagedServiceForMicrosoftActiveDirectory>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
