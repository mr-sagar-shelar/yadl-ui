import type { Meta, StoryObj } from "@storybook/react";
import OnlineMessaging from "../OnlineMessaging";

const meta: Meta<typeof OnlineMessaging> = { title: "unDraw/OnlineMessaging", component: OnlineMessaging };

export default meta;
type Story = StoryObj<typeof OnlineMessaging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
