import type { Meta, StoryObj } from "@storybook/react";
import MedTechService from "../MedTechService";

const meta: Meta<typeof MedTechService> = { title: "Azure/Other/MedTechService", component: MedTechService };

export default meta;
type Story = StoryObj<typeof MedTechService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
