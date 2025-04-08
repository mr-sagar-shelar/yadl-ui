import type { Meta, StoryObj } from "@storybook/react";
import IotCore from "../IotCore";

const meta: Meta<typeof IotCore> = { title: "GCP/IotCore", component: IotCore };

export default meta;
type Story = StoryObj<typeof IotCore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
