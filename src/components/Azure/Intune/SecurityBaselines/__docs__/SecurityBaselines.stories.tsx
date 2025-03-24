import type { Meta, StoryObj } from "@storybook/react";
import SecurityBaselines from "../SecurityBaselines";

const meta: Meta<typeof SecurityBaselines> = { title: "Azure/Intune/SecurityBaselines", component: SecurityBaselines };

export default meta;
type Story = StoryObj<typeof SecurityBaselines>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
