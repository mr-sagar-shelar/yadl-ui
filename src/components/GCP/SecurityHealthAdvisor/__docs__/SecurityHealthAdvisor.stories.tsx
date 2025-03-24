import type { Meta, StoryObj } from "@storybook/react";
import SecurityHealthAdvisor from "../SecurityHealthAdvisor";

const meta: Meta<typeof SecurityHealthAdvisor> = { title: "GCP/SecurityHealthAdvisor", component: SecurityHealthAdvisor };

export default meta;
type Story = StoryObj<typeof SecurityHealthAdvisor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
