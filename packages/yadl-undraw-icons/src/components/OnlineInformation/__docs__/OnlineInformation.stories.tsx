import type { Meta, StoryObj } from "@storybook/react";
import OnlineInformation from "../OnlineInformation";

const meta: Meta<typeof OnlineInformation> = { title: "unDraw/OnlineInformation", component: OnlineInformation };

export default meta;
type Story = StoryObj<typeof OnlineInformation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
