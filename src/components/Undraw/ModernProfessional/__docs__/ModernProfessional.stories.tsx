import type { Meta, StoryObj } from "@storybook/react";
import ModernProfessional from "../ModernProfessional";

const meta: Meta<typeof ModernProfessional> = { title: "unDraw/ModernProfessional", component: ModernProfessional };

export default meta;
type Story = StoryObj<typeof ModernProfessional>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
