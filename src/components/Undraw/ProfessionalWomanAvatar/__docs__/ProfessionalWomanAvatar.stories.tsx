import type { Meta, StoryObj } from "@storybook/react";
import ProfessionalWomanAvatar from "../ProfessionalWomanAvatar";

const meta: Meta<typeof ProfessionalWomanAvatar> = { title: "unDraw/ProfessionalWomanAvatar", component: ProfessionalWomanAvatar };

export default meta;
type Story = StoryObj<typeof ProfessionalWomanAvatar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
