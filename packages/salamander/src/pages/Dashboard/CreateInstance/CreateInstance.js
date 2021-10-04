import React from 'react'
import {Formik, Field} from 'formik'
import * as yup from 'yup'
import {
  faChild,
  faRocket,
  faCheckDouble
} from '@fortawesome/free-solid-svg-icons'

import InstanceNameInput from './InstanceNameInput'
import InstanceTypeSelector from './InstanceTypeSelector'
import Section from 'pages/Dashboard/Section'
import Input from 'components/Input'
import Text from 'components/Text'

const instanceTypes = [
  'm5.large',
  'm5.xlarge',
  'm5.2xlarge',
  'm5.4xlarge',
  'm5.12xlarge',
  'm5.24xlarge',
  'p2.xlarge',
  'p2.8xlarge',
  'p2.16xlarge',
  'p3.2xlarge',
  'p3.8xlarge',
  'p3.16xlarge',
  'g3.4xlarge',
  'g3.8xlarge',
  'g3.16xlarge',
  'g3s.xlarge',
  'r5.large',
  'r5.xlarge',
  'r5.2xlarge',
  'r5.4xlarge',
  'r5.12xlarge',
  'r5.24xlarge',
  'c5.large',
  'c5.xlarge',
  'c5.2xlarge',
  'c5.4xlarge',
  'c5.9xlarge',
  'c5.18xlarge',
  't3.large',
  't3.xlarge',
  't3.2xlarge'
]

const preferredOrder = [
  'p2.xlarge',
  'p3.2xlarge',
  'g3.4xlarge',
  'r5.2xlarge',
  'm5.2xlarge',
  'c5.2xlarge',
  't3.2xlarge'
]

const getDefaultInstanceType = candidates => {
  candidates = new Set(candidates)
  if (candidates.has('m5') && !production) return 'm5.large'
  for (const type of preferredOrder) {
    //if (candidates.has(type.split('.')[0])) return type
    if (candidates.has(type.slice(0, 2))) return type
  }
  return 'm5.large'
}

const production = process.env.NODE_ENV === 'production'

const validationSchema = yup.object().shape({
  prettyName: yup.string().required(),
  storageSize: yup
    .number()
    .required()
    .min(40, 'Must be more than 40GB')
    .max(1000, 'Must be less than 1,000GB'),
  instanceType: yup.string().oneOf(instanceTypes)
})

const CreateInstanceForm = ({
  handleSubmit,
  user,
  firstInstanceCreated,
  firstInstanceCreatedThisSession,
  onClickSuccess,
  successCount,
  successRefeshing
}) => {
  const defaultInstanceType = getDefaultInstanceType(
    user.instanceTypes || ['m5', 'p2', 'p3']
  )
  return (
    <Formik
      initialValues={{
        prettyName: '',
        softwareTemplateReference: 'SYSTEM_FASTAI',
        softwareTemplateReferenceCustom: '',
        instanceType: defaultInstanceType,
        storageSize: production ? 75 : 40,
        //ethicsAccepted: !!firstInstanceCreated,
        renewAccepted: !!firstInstanceCreated,
        estimatesAccepted: !!firstInstanceCreated,
        stopAccepted: !!firstInstanceCreated
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, {setSubmitting, setErrors}) => {
        values = {...values}
        if (values.softwareTemplateReference === 'CUSTOM') {
          values.softwareTemplateReference =
            values.softwareTemplateReferenceCustom
        }
        //delete values.ethicsAccepted
        delete values.renewAccepted
        delete values.estimatesAccepted
        delete values.stopAccepted
        delete values.softwareTemplateReferenceCustom
        setSubmitting(true)
        const {errors} = await handleSubmit(values)
        if (errors) setErrors(errors)
        setSubmitting(false)
      }}
    >
      {({
        values = {},
        errors,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        submitCount
      }) => {
        let storageCost = (values.storageSize || 0) * 0.1
        storageCost = '$' + storageCost.toFixed(2)

        const firstPurchase = false

        const acceptedError =
          //errors.ethicsAccepted ||
          (errors.renewAccepted ||
            errors.estimatesAccepted ||
            errors.stopAccepted) &&
          'You need to acknowledge the above'

        const e = errors
        const el = !!Object.keys(errors).length
        const submitError =
          e._error || acceptedError || e.softwareTemplateReference || el

        return (
          <form onSubmit={e => e.preventDefault()}>
            <div
              css={`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              <div>
                <Field
                  name="prettyName"
                  prettyNameKey={successCount.toString()}
                  error={submitCount && errors.prettyName}
                  label="Name and Location"
                  component={InstanceNameInput}
                />
                <br />
                <Field
                  name="storageSize"
                  error={submitCount && errors.storageSize}
                  label="Storage"
                  notes={`${storageCost} per month, $0.10 per GB`}
                  format={{
                    suffix: values.instanceType.startsWith('p')
                      ? 'GB SSD'
                      : 'GB NVMe',
                    decimalScale: 0,
                    allowNegative: false,
                    allowEmptyFormatting: true,
                    thousandSeparator: ','
                  }}
                  component={Input.Text}
                />
              </div>
              <div>
                <Input.Radio.Group
                  label="Software"
                  notes="NB: Once launched, Salamander can't install new software automatically"
                >
                  <Input.Radio
                    checked={
                      values.softwareTemplateReference === 'SYSTEM_FASTAI'
                    }
                    onChange={() =>
                      setFieldValue(
                        'softwareTemplateReference',
                        'SYSTEM_FASTAI'
                      )
                    }
                  >
                    PyTorch 1.2, fastai, and the v3 MOOC course
                  </Input.Radio>
                  <br />
                  <Input.Radio
                    checked={values.softwareTemplateReference === 'SYSTEM_NONE'}
                    onChange={() =>
                      setFieldValue('softwareTemplateReference', 'SYSTEM_NONE')
                    }
                  >
                    Ubuntu 18, and nothing else
                  </Input.Radio>
                  <br />
                  <Input.Radio
                    checked={
                      values.softwareTemplateReference === 'SYSTEM_PYTHON'
                    }
                    onChange={() =>
                      setFieldValue(
                        'softwareTemplateReference',
                        'SYSTEM_PYTHON'
                      )
                    }
                  >
                    Anaconda, plus my Jupyter integration
                  </Input.Radio>
                  <br />
                  <Input.Radio
                    checked={
                      values.softwareTemplateReference === 'SYSTEM_TENSORFLOW'
                    }
                    onChange={() =>
                      setFieldValue(
                        'softwareTemplateReference',
                        'SYSTEM_TENSORFLOW'
                      )
                    }
                  >
                    TensorFlow 1.12 (Not maintained)
                  </Input.Radio>
                  <br />
                  <Input.Radio
                    checked={values.softwareTemplateReference === 'CUSTOM'}
                    onChange={() =>
                      setFieldValue('softwareTemplateReference', 'CUSTOM')
                    }
                  >
                    From software template (paste reference below)
                  </Input.Radio>
                  <br />
                  <Input.Text
                    box={{paddingOutside: {base: '0px', left: '30px'}}}
                    onClick={() => {
                      setFieldValue('softwareTemplateReference', 'CUSTOM')
                    }}
                    onChange={e => {
                      setFieldValue(
                        'softwareTemplateReferenceCustom',
                        e.target.value
                      )
                    }}
                  />
                </Input.Radio.Group>
              </div>
            </div>
            <Field
              name="instanceType"
              error={submitCount && errors.instanceType}
              label="Hardware"
              types={user.instanceTypes}
              notes={
                <>
                  More server setups are available on the{' '}
                  <Text.Link nonfunctional to="/server-addons">
                    server addons
                  </Text.Link>{' '}
                  page
                </>
              }
              component={InstanceTypeSelector}
            />
            <br />
            <Input.Button
              type="submit"
              icon={successRefeshing ? faCheckDouble : faRocket}
              loading={isSubmitting || successRefeshing === 2}
              disabled={isSubmitting || successRefeshing === 2}
              error={submitCount && submitError}
              primary
            >
              {successRefeshing
                ? 'Success!'
                : firstPurchase
                ? 'Buy $5 Compute Credits & Launch Server'
                : successCount
                ? 'Launch Another Server'
                : 'Launch Server'}
            </Input.Button>
            <br />
          </form>
        )
      }}
    </Formik>
  )
}

const instanceList = {
  instances: {
    id: 'instances',
    count: 0,
    created: 0,
    data: []
  },
  user: {},
  spotPricing: [],
  costReports: []
}

class CreateInstanceFormWithNetwork extends React.Component {
  // in addition to network stuff, this HOC adds an intermediate "success" state
  // between submits and makes sure the acknowledgements section doesn't
  // disapear when the user creates their first instance (until a refresh)
  state = {
    successCount: 0,
    successRefeshing: 0, // 0=off, 1=ready, 2=in-progress
    firstInstanceCreatedThisSession: false
  }
  render() {
    const handleSubmit = () => {}
    const {
      successCount,
      successRefeshing,
      firstInstanceCreatedThisSession
    } = this.state

    const data = instanceList

    this.refetch = () => {}
    // eslint-disable-next-line
    const created = data?.instances?.created
    // eslint-disable-next-line
    const zeroInstances = !(data?.instances?.data || []).filter(
      i => !i.removeScheduledAt
    ).length
    // this early return makes things jump around in development, but it
    // will be fine with production SSR. it's here to make sure we don't
    // accidentally open the section on load
    if (created == null) return null
    const firstInstanceCreated = created > 0

    return (
      <Section
        ref={section => (this.section = section)}
        id="design_server"
        title={
          firstInstanceCreated ? 'Design Another Server' : 'Design Your Server'
        }
        icon={faChild}
        initialOpen={zeroInstances}
      >
        <CreateInstanceForm
          handleSubmit={e => {
            this.setState({
              firstInstanceCreatedThisSession:
                !firstInstanceCreated || firstInstanceCreatedThisSession
            })
            return handleSubmit(e)
          }}
          user={data.user}
          spotPricing={data.spotPricing}
          firstInstanceCreated={firstInstanceCreated}
          firstInstanceCreatedThisSession={firstInstanceCreatedThisSession}
          loading={false}
          onClickSuccess={e => {
            e.preventDefault()
            this.setState({successRefeshing: 2})
            setTimeout(() => this.setState({successRefeshing: 0}), 800)
          }}
          successCount={successCount}
          successRefeshing={successRefeshing}
        />
      </Section>
    )
  }
}

CreateInstanceFormWithNetwork.Raw = CreateInstanceForm
export default CreateInstanceFormWithNetwork
