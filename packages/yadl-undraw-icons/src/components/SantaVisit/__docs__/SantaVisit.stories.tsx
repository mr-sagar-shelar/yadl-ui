import type { Meta, StoryObj } from "@storybook/react";
import SantaVisit from "../SantaVisit";

const meta: Meta<typeof SantaVisit> = { title: "unDraw/SantaVisit", component: SantaVisit };

export default meta;
type Story = StoryObj<typeof SantaVisit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
