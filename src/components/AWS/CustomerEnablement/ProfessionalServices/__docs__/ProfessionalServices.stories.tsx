import type { Meta, StoryObj } from "@storybook/react";
import ProfessionalServices from "../ProfessionalServices";

const meta: Meta<typeof ProfessionalServices> = { title: "AWS/CustomerEnablement/ProfessionalServices", component: ProfessionalServices };

export default meta;
type Story = StoryObj<typeof ProfessionalServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
