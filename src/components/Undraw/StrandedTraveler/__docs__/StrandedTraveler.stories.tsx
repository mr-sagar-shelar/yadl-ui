import type { Meta, StoryObj } from "@storybook/react";
import StrandedTraveler from "../StrandedTraveler";

const meta: Meta<typeof StrandedTraveler> = { title: "unDraw/StrandedTraveler", component: StrandedTraveler };

export default meta;
type Story = StoryObj<typeof StrandedTraveler>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
