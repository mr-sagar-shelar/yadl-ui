import type { Meta, StoryObj } from "@storybook/react";
import ContactCenterAi from "../ContactCenterAi";

const meta: Meta<typeof ContactCenterAi> = { title: "GCP/ContactCenterAi", component: ContactCenterAi };

export default meta;
type Story = StoryObj<typeof ContactCenterAi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
