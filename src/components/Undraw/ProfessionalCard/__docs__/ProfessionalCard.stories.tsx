import type { Meta, StoryObj } from "@storybook/react";
import ProfessionalCard from "../ProfessionalCard";

const meta: Meta<typeof ProfessionalCard> = { title: "unDraw/ProfessionalCard", component: ProfessionalCard };

export default meta;
type Story = StoryObj<typeof ProfessionalCard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
