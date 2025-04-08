import type { Meta, StoryObj } from "@storybook/react";
import OnlineParty from "../OnlineParty";

const meta: Meta<typeof OnlineParty> = { title: "unDraw/OnlineParty", component: OnlineParty };

export default meta;
type Story = StoryObj<typeof OnlineParty>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
