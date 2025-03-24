import type { Meta, StoryObj } from "@storybook/react";
import AtTheAirport from "../AtTheAirport";

const meta: Meta<typeof AtTheAirport> = { title: "unDraw/AtTheAirport", component: AtTheAirport };

export default meta;
type Story = StoryObj<typeof AtTheAirport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
